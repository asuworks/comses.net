# Generated by Django 4.2.11 on 2024-05-22 23:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("library", "0027_codebase_spam_moderation"),
    ]

    operations = [
        migrations.AddField(
            model_name="contributor",
            name="json_affiliations",
            field=models.JSONField(
                default=list, help_text="JSON-LD list of affiliated institutions"
            ),
        ),
    ]