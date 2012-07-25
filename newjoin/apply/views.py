# Create your views here.
from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render_to_response
from newjoin.apply.models import applyform,contentText
#from newjoin.view import basic

def submitHandler(request):
	content = contentText.objects.filter(using__exact=True)
	blank = False
	outrange = False
	if 'name' in request.POST and 'sex' in request.POST and 'collegename' in request.POST and 'grade' in request.POST and 'mobile' in request.POST and 'dorm' in request.POST and 'mail' in request.POST and 'advantages' in request.POST and 'first_department' in request.POST and 'second_department' in request.POST and 'reason' in request.POST:
		name = request.POST['name']
		sex = request.POST['sex']
		college = request.POST['collegename']
		grade = request.POST['grade']
		mobile = request.POST['mobile']
		dorm = request.POST['dorm']
		email = request.POST['mail']
		advantage = request.POST['advantages']
		mostwant = request.POST['first_department']
		secondwant = request.POST['second_department']
		reason = request.POST['reason']
		if name and sex and college and grade and mobile and dorm and email and advantage and mostwant and secondwant and reason and cmp(sex,"none") and cmp(grade,"none") and cmp(mostwant,"none") and cmp(secondwant,"none"):
			listcolumn10 = [name,college,mobile,dorm,advantage,mostwant,secondwant]
			for i in listcolumn10:
				if len(i)>10:
					outrange = True
					return render_to_response('error.html',locals())
					#break
			if len(sex)>6 or len(grade)>7 or len(email)>30 or len(reason)>200:
				outrange = True
				return render_to_response('error.html',locals())
			applys = applyform(name=name,sex=sex,college=college,grade=grade,mobile=mobile,dorm=dorm,email=email,advantage=advantage,mostwant=mostwant,secondwant=mostwant,reason=reason)
			applys.save()
			return render_to_response('index.html',locals())
		else:
			blank = True
			return render_to_response('error.html',locals())
	else:
		return render_to_response('index.html',locals())
#	return HttpResponseRedirect('/')
