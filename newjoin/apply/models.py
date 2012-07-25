from django.db import models

# Create your models here.
class applyform(models.Model):
	name = models.CharField(max_length=10)
	sex = models.CharField(max_length=6)
	college = models.CharField(max_length=10)
	grade = models.CharField(max_length=7)
	mobile = models.IntegerField(max_length=11)
	dorm = models.CharField(max_length=10)
	email = models.EmailField(max_length=30)
	advantage = models.CharField(max_length=10)
	mostwant = models.CharField(max_length=10)
	secondwant = models.CharField(max_length=10)
	reason = models.TextField(max_length=200)

	def __unicode__(self):
	    return self.name

class contentText(models.Model):
	using = models.BooleanField()
	version = models.CharField(max_length=10)
	sitemain = models.TextField(max_length=300)
	managemain = models.TextField(max_length=300)
	coordinate = models.TextField(max_length=300)
	teambuild = models.TextField(max_length=300)
	newsmain = models.TextField(max_length=300)
	reporter = models.TextField(max_length=300)
	photo = models.TextField(max_length=300)
	wireless = models.TextField(max_length=300)
	techmain = models.TextField(max_length=300)
	design = models.TextField(max_length=300)
	dev = models.TextField(max_length=300)
	schememain = models.TextField(max_length=300)
	pr = models.TextField(max_length=300)
	liaison = models.TextField(max_length=300)
	netpromote = models.TextField(max_length=300)
	resourcemain = models.TextField(max_length=300)
	miao = models.TextField(max_length=300)
	edu = models.TextField(max_length=300)
	bbs = models.TextField(max_length=300)
	video = models.TextField(max_length=300)

	def __unicode__(self):
	    return self.version
