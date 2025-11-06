from django.db import models

# Create your models here.


class Article(models.Model):
    name_of_article = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.CharField(max_length=300, blank=True)

    def __str__(self):
        return f"{self.name_of_article}"
