from django.http import HttpResponse
from rest_framework import serializers

from api.hearts.models import Heart
from api.projects.models import Project
from api.projects.serializers import ProjectHyperlinkedRelatedFieldSerializer


class HeartSerializer(serializers.HyperlinkedModelSerializer):
    project = ProjectHyperlinkedRelatedFieldSerializer(
        view_name="project-detail",
        queryset=Project.objects.all(),
        lookup_field="pk"
    )

    def create(self, validated_data):
        validated_project = validated_data.get("project", None)
        if not validated_project:
            return HttpResponse(status=400)

        project = Project.objects.get(
            id=validated_project.id
        )

        if not project:
            return HttpResponse(status=400)

        heart = Heart.objects.create(
            project=project
        )

        return heart

    class Meta:
        model = Heart
        fields = ["id", "url", "date_created", "project"]
