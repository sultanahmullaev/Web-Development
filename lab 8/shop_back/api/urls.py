from django.urls import path, re_path
from api.views import product_list, product_detail, category_list, category_detail, category_item_list

urlpatterns = [
    path('products/', product_list),
    path('products/<int:product_id>', product_detail),
    path('categories/', category_list),
    path('categories/<int:category_id>', category_detail),
    path('categories/<int:category_id>/products', category_item_list)
]