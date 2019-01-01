from rest_framework import serializers

from api.projects.models import Project
from api.skills.models import Skill
from api.skills.serializers import TechnologySerializer
from api.tags.models import Tag
from api.tags.serializers import TagSerializer



def set_project_tags(project, tags):
    """
    given a CSL, find any skills which a) match the item exactly and b) if no exact matches, the first which contains each item.

    if found:
        add each skill to the projects skills.  its up to the user (me!) to be specific enough to differentiate i.e. Java and JavaScript
        do not add that skill to tags (this is so changes to the skill do not require a change to tags)

    if not found:
        add that tag as-is to the projects tags
        if a tag already exists, link it instead of creating a dupe

    this one-field-to-many-different-fields-but-with-inferred-context trickery is mostly because
        drf's browsable api does not support foreign lists
        i dont want to build a UI for the backend to represent foreign lists
        i dont want to worry about manually inserting JSON in lieu of a foreign reference
    """
    tags = tags.strip()
    if tags is '':
        project.tags.set([])
        return

    names = tags.split(",")
    tags_to_assign = []
    skills_to_assign = []

    for name in names:
        name = name.strip()

        exact_matches = Skill.objects.filter(
            name__iexact=name
        )

        # exact match exists.  use that.
        if len(exact_matches) > 0:
            skills_to_assign.append(exact_matches[0])
            continue

        matched_skills = Skill.objects.filter(
            name__icontains=name
        )

        # skill exists.  use that.
        if len(matched_skills) > 0:
            skills_to_assign.append(matched_skills[0])
            continue

        # no matching skill.  treat it as a tag.
        current_tag = Tag.objects.get_or_create(
            name=name
        )

        if current_tag[1]:
            current_tag[0].save()

        tags_to_assign.append(current_tag[0])

    project.tags.set(tags_to_assign)
    project.skills.set(skills_to_assign)

    project.save()


class ProjectCreateSerializer(serializers.HyperlinkedModelSerializer):
    name = serializers.CharField()

    thumbnail_url = serializers.URLField()

    code_url = serializers.URLField()

    live_url = serializers.URLField()

    tags_list = serializers.CharField(
        write_only=True
    )

    tags = TagSerializer(
        many=True,
        read_only=True
    )

    skills = TechnologySerializer(
        many=True,
        read_only=True
    )

    hearts = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name="heart-detail",
        source="get_hearts"
    )

    def create(self, validated_data):
        project = Project.objects.create(
            name=validated_data.get("name", ""),
            thumbnail_url=validated_data.get("thumbnail_url", ""),
            code_url=validated_data.get("code_url", ""),
            live_url=validated_data.get("live_url", "")
        )

        project.save()

        set_project_tags(project, validated_data.get("tags_list", ""))

        return project

    class Meta:
        model = Project
        fields = ["id", "url", "name", "thumbnail_url", "code_url", "live_url", "tags_list", "tags", "skills", "hearts"]


class ProjectUpdateSerializer(serializers.HyperlinkedModelSerializer):
    name = serializers.CharField()

    thumbnail_url = serializers.URLField()

    code_url = serializers.URLField()

    live_url = serializers.URLField()

    tags_list = serializers.CharField(
        source="get_tags_list",
        allow_blank=True
    )

    tags = TagSerializer(
        many=True,
        read_only=True
    )

    skills = TechnologySerializer(
        many=True,
        read_only=True
    )

    hearts = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name="heart-detail",
        source="get_hearts"
    )

    def update(self, instance, validated_data):
        project = Project.objects.get(
            id=instance.id
        )

        project.name = validated_data.get("name", "")
        project.thumbnail_url = validated_data.get("thumbnail_url", "")
        project.code_url = validated_data.get("code_url", "")
        project.live_url = validated_data.get("live_url", "")

        set_project_tags(project, validated_data.get("get_tags_list", ""))

        return project

    class Meta:
        model = Project
        write_only_fields = ["tags_list"]
        fields = ["id", "url", "name", "thumbnail_url", "code_url", "live_url", "tags_list", "tags", "skills", "hearts"]


class ProjectViewSerializer(serializers.HyperlinkedModelSerializer):
    name = serializers.CharField()

    thumbnail_url = serializers.URLField()

    code_url = serializers.URLField()

    live_url = serializers.URLField()

    hearts = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name="heart-detail",
        source="get_hearts"
    )

    tags = TagSerializer(
        many=True,
        read_only=True
    )

    skills = TechnologySerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Project
        fields = ["id", "url", "name", "thumbnail_url", "code_url", "live_url", "hearts", "skills", "tags"]


class ProjectHyperlinkedRelatedFieldSerializer(serializers.HyperlinkedRelatedField):
    def display_value(self, instance):
        return instance.name
