from rest_framework import serializers

from api.skills.models import Skill


class TechnologySerializer(serializers.HyperlinkedModelSerializer):
    name = serializers.CharField()

    icon_class = serializers.CharField()

    class Meta:
        model = Skill
        fields = ["id", "url", "name", "icon_class"]


class SkillSerializer(TechnologySerializer):
    proficiency = serializers.IntegerField(
        min_value=0,
        max_value=100
    )

    class Meta:
        model = Skill
        fields = ["id", "url", "name", "proficiency", "icon_class"]
