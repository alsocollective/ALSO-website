from django.contrib import admin
from ALSO.models import ImageNode, TextNode,Category,Article,InstaPost

# class ProjectAdmin(admin.ModelAdmin):
# 	fields = ['title','content']

# class CategoryAdmin(admin.ModelAdmin):
# 	fieldsets = [
# 		('title',{'fields':['title']}),
# 		('content',{'fields':['projects','pages']}),
# 	]


class Image(admin.ModelAdmin):
	fieldsets = [
		(None,{'fields':['location']}),
		('Advance options', {
			'classes':('collapse',),
			'fields':('description','title')
			}),
	]



admin.site.register(ImageNode,Image)
admin.site.register(TextNode)
admin.site.register(Category)
admin.site.register(Article)
admin.site.register(InstaPost)