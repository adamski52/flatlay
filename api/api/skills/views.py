from rest_framework import permissions

from api.skills.models import Skill
from api.skills.serializers import SkillSerializer
from api.views import BaseViewSet


class SkillViewSet(BaseViewSet):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    serializers = {
        "default": SkillSerializer
    }

    def get_queryset(self):
        return Skill.objects.all()