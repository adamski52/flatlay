from django.db import models

from api.hearts.models import Heart
from api.skills.models import Skill
from api.tags.models import Tag
from api.models import BaseModel


class Project(BaseModel):
    name = models.CharField(
        max_length=40
    )

    thumbnail_url = models.URLField(
        null=True
    )

    code_url = models.URLField(
        null=True
    )

    live_url = models.URLField(
        null=True
    )

    tags = models.ManyToManyField(
        Tag
    )

    skills = models.ManyToManyField(
        Skill
    )

    def get_hearts(self):
        return Heart.objects.all().filter(
            project=self.id
        )

    def get_tags_list(self):
        tags = self.tags.all()
        skills = self.skills.all()

        names = []
        for tag in tags:
            names.append(tag.name)

        for skill in skills:
            names.append(skill.name)

        return ", ".join(names)

    class Meta:
        unique_together = ["name", "date_deleted"]
