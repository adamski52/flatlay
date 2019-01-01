# Generated by Django 2.0.5 on 2018-06-02 00:29

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('date_modified', models.DateTimeField(auto_now=True, null=True)),
                ('date_deleted', models.CharField(default='', max_length=20, null=True)),
                ('name', models.CharField(max_length=100, unique=True)),
                ('proficiency', models.PositiveIntegerField()),
                ('icon_class', models.CharField(max_length=100)),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='skill',
            unique_together={('name', 'date_deleted')},
        ),
    ]