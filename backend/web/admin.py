from django.contrib import admin
from .models import Article

# Register your models here.


class ArticleAdmin(admin.ModelAdmin):
    list_display = ("name_of_article", "description", "image")


# admin.site.register(Article)
admin.site.register(Article, ArticleAdmin)
