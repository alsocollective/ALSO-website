from django.shortcuts import render_to_response, get_object_or_404
from  ALSO.models import Project,Category,Page

def home(request):
	return render_to_response('index.html',{'nothing':True})

def pureData(request):
	categories = Category.objects.all()
	out = []
	for category in categories:
		localOut = {}
		localOut.update({"title":category.title})
		if category.projects.all():
			projects = []
			for project in category.projects.all():
				projects.append({"title":project.title,"content":project.content})
			localOut.update({"projects":projects})

		if category.pages.all():
			pages = []
			for page in category.pages.all():
				pages.append({"title": page.title, "content":page.content})
			localOut.update({"pages":pages})
		out.append(localOut)
	return render_to_response('basic.html',{'content':out})