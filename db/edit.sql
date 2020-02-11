update shelfie_products 
set product_name = ${product_name}
where id = ${id}
returning *;