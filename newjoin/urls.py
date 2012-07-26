from django.conf.urls import patterns, include, url
#from newjoin.view import basic
from newjoin.apply.views import submitHandler

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
	#(r'^error/$',basic),
	(r'^$',submitHandler),
    (r'^favicon\.ico$','django.views.generic.simple.redirect_to',{'url':'/static/pic/favicon.ico'}),
    url(r'^admin/', include(admin.site.urls)),
    # Examples:
    # url(r'^$', 'newjoin.views.home', name='home'),
    # url(r'^newjoin/', include('newjoin.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
)
