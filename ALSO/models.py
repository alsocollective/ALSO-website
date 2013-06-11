from django.db import models
from django.template.defaultfilters import slugify
import os.path

class ImageNode(models.Model):
	description = models.CharField(max_length=300, blank=True)

	def slugify_filename(instance, filename):
		fname, dot, extension = filename.rpartition('.')
		slug = slugify(fname)
		instance.title = '%s.%s' % (slug, extension)
		return 'static/img/uploaded/%s.%s' % (slug, extension)

	location = models.FileField(upload_to=slugify_filename)

	# def titleName(this):
	# 	out = os.path.basename(self.location.name)
	# 	if(not out):
	# 		out = "you don't need to enter a title"
	# 	return out

	title = models.CharField(max_length=600,blank=True)#,default=titleName)

	def save(self, *args, **kwargs):
		self.title = os.path.basename(self.location.name)
		super(ImageNode, self).save(*args, **kwargs)

	def __unicode__(self):
		return self.title

class TextNode(models.Model):
	title = models.CharField(max_length=600)
	backgroundImage = models.ManyToManyField(ImageNode, blank=True, related_name="bkImage+")
	textField = models.TextField(max_length=4000)

	def __unicode__(self):
		return self.title

class Category(models.Model):
	title = models.CharField(max_length=600)
	slug = models.SlugField(blank=True)
	##if left blank have it display all
	toDisplay = models.IntegerField(blank=True,default=0)

	def save(self,*args, **kwargs):
		self.slug = slugify(self.title)
		super(Category, self).save(*args, **kwargs)

	def __unicode__(self):
		return self.title

class Article(models.Model):
	title = models.CharField(max_length=600)
	textFields = models.ManyToManyField(TextNode,blank=True,related_name="textFields+")
	imageFields = models.ManyToManyField(ImageNode,blank=True,related_name="imageFields+")
	category = models.ManyToManyField(Category,related_name="category+")
	## could add to the save function so it affects the others articles of the same class
	order = models.IntegerField(blank=True,default=0)
	slug = models.SlugField(blank=True)

	def save(self,*args, **kwargs):
		self.slug = slugify(self.title)
		super(Article, self).save(*args, **kwargs)

	def __unicode__(self):
		return self.title

# class Employee(models.Model):
# 	firstName = models.CharField(max_length=100)
# 	lastName = models.CharField(max_length=100)
# 	bio = models.TextField(max_length=1000)
# 	slug = models.SlugField(blank=True)

# 	def __unicode__(self):
# 		return self.firstName + " " + self.lastName

# 	def save(self, *args, **kwargs):
# 		self.slug = slugify(self.firstName + " " + self.lastName)
# 		super(Employee, self).save(*args, **kwargs)

# class Project(models.Model):
# 	title = models.CharField(max_length=50)
# 	content = models.TextField(max_length=1000)
# 	slug = models.SlugField(blank=True)

# 	def __unicode__(self):
# 		return self.title

# 	def save(self, *args, **kwargs):
# 		self.slug = slugify(self.title)
# 		super(Project, self).save(*args, **kwargs)


# class Page(models.Model):
# 	title = models.CharField(max_length=100)
# 	content = models.TextField(max_length=3000)
# 	slug = models.SlugField(blank=True)

# 	def __unicode__(self):
# 		return self.title

# 	def save(self, *args, **kwargs):
# 		self.slug = slugify(self.title)
# 		super(Page, self).save(*args, **kwargs)

# class Category(models.Model):
# 	title = models.CharField(max_length=50)
# 	projects = models.ManyToManyField(Project, blank=True, related_name="projects+")
# 	pages = models.ManyToManyField(Page, blank=True, related_name="pages+")

# 	def __unicode__(self):
# 		return self.title

# 	def save(self, *args, **kwargs):
# 		self.slug = slugify(self.title)
# 		super(Category, self).save(*args, **kwargs)


