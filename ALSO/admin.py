from django.contrib import admin
from ALSO.models import ImageNode, TextNode,Category,Article

# class ProjectAdmin(admin.ModelAdmin):
# 	fields = ['title','content']

# class CategoryAdmin(admin.ModelAdmin):
# 	fieldsets = [
# 		('title',{'fields':['title']}),
# 		('content',{'fields':['projects','pages']}),
# 	]




admin.site.register(ImageNode)
admin.site.register(TextNode)
admin.site.register(Category)
admin.site.register(Article)
