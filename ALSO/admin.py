from django.contrib import admin
from ALSO.models import Project,Category,Page

class ProjectAdmin(admin.ModelAdmin):
	fields = ['title','content']

class CategoryAdmin(admin.ModelAdmin):
	fieldsets = [
		('title',{'fields':['title']}),
		('content',{'fields':['projects','pages']}),
	]




admin.site.register(Category,CategoryAdmin)
admin.site.register(Page)
admin.site.register(Project, ProjectAdmin)
