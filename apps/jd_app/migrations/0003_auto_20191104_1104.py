# Generated by Django 2.0.12 on 2019-11-04 11:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jd_app', '0002_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='sort',
            field=models.IntegerField(default=0, verbose_name='排序'),
        ),
        migrations.AddField(
            model_name='category',
            name='type',
            field=models.CharField(choices=[('1', '导航'), ('2', '九宫格')], default='1', max_length=10, verbose_name='显示'),
        ),
    ]
