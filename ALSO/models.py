from django.db import models
from django.template.defaultfilters import slugify


class Employee(models.Model):
	firstName = models.CharField(max_length=100)
	lastName = models.CharField(max_length=100)
	bio = models.TextField(max_length=1000)
	slug = models.SlugField(blank=True)

	def __unicode__(self):
		return self.firstName + " " + self.lastName

	def save(self, *args, **kwargs):
		self.slug = slugify(self.firstName + " " + self.lastName)
		super(Employee, self).save(*args, **kwargs)

class Project(models.Model):
	title = models.CharField(max_length=50)
	content = models.TextField(max_length=1000)
	slug = models.SlugField(blank=True)

	def __unicode__(self):
		return self.title

	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super(Project, self).save(*args, **kwargs)


class Page(models.Model):
	title = models.CharField(max_length=100)
	content = models.TextField(max_length=3000)
	slug = models.SlugField(blank=True)

	def __unicode__(self):
		return self.title

	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super(Page, self).save(*args, **kwargs)

class Category(models.Model):
	title = models.CharField(max_length=50)
	projects = models.ManyToManyField(Project, blank=True, related_name="projects+")
	pages = models.ManyToManyField(Page, blank=True, related_name="pages+")

	def __unicode__(self):
		return self.title

	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super(Category, self).save(*args, **kwargs)


