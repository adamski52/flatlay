from rest_framework import permissions

from api.projects.models import Project
from api.projects.serializers import ProjectViewSerializer, ProjectCreateSerializer, ProjectUpdateSerializer
from api.views import BaseViewSet


class ProjectViewSet(BaseViewSet):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    serializers = {
        "default": ProjectViewSerializer,
        "POST": ProjectCreateSerializer,
        "PUT": ProjectUpdateSerializer
    }

    def get_queryset(self):
        return Project.objects.all()
