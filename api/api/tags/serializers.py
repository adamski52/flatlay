from rest_framework import serializers

from api.tags.models import Tag


class TagSerializer(serializers.HyperlinkedModelSerializer):
    name = serializers.CharField()

    class Meta:
        model = Tag
        fields = ["id", "url", "name"]
