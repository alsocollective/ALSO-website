from django.shortcuts import render_to_response, get_object_or_404
# from  ALSO.models import Project,Category,Page
from ALSO.models import ImageNode, TextNode, Category ,Article

def home(request):
	categories = Category.objects.all()
	allContent = {}
	for category in categories:
		catObj = {"cat":category.slug}
		articles = Article.objects.all().filter(category__exact = category)
		artList = []
		for article in articles:
			artObj = {"title":article.title,"slug":article.slug,article.slug:"yep"}#, "textFields":article.textFields.all()}
			textList = []
			for text in article.textFields.all():
				textObj = {"text":text.textField,"title":text.title}
				for image in text.backgroundImage.all():
					textObj.update({"bkImage":image.title})
				textList.append(textObj)
			imageList = []
			for image in article.imageFields.all():
				imageObj = {"title":image.title}
				imageList.append(imageObj)
			artObj.update({"text":textList,"image":imageList})
			artList.append(artObj)
		catObj.update({"artList":artList})
		allContent.update({category.title:catObj})


	return render_to_response('index.html',{'allContent':allContent})

def pureData(request):

	return render_to_response('basic.html',{"nothing":"out"})
	# categories = Category.objects.all()
	# out = []
	# for category in categories:
	# 	localOut = {}
	# 	localOut.update({"title":category.title})
	# 	if category.projects.all():
	# 		projects = []
	# 		for project in category.projects.all():
	# 			projects.append({"title":project.title,"content":project.content})
	# 		localOut.update({"projects":projects})

	# 	if category.pages.all():
	# 		pages = []
	# 		for page in category.pages.all():
	# 			pages.append({"title": page.title, "content":page.content})
	# 		localOut.update({"pages":pages})
	# 	out.append(localOut)
	# return render_to_response('basic.html',{'content':out})