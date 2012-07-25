from django.contrib import admin
from newjoin.apply.models import applyform
from newjoin.apply.models import contentText

class applyformAdmin(admin.ModelAdmin):
	search_fields = ('name',)

admin.site.register(applyform,applyformAdmin)
admin.site.register(contentText)
