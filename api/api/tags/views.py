from rest_framework import permissions
from api.tags.models import Tag
from api.tags.serializers import TagSerializer
from api.views import BaseViewSet


class TagViewSet(BaseViewSet):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    serializers = {
        "default": TagSerializer
    }

    def get_queryset(self):
        return Tag.objects.all()
