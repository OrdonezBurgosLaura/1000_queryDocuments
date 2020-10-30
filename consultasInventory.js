/*Devuelve todos los documentos de la colección*/
db.inventory01.find()
/*Devuelve un documento que satisface los criterios de consulta especificados en la colección.*/
db.inventory01.find({"qty":25})
/*El operador $in devuelve los valores iguales a los criterios de consulta especificados en la colección*/
db.inventory01.find({ size: { $in: [ 5 ], size: {$in: [21] } } })
/*El operador $eq devuelve los valores iguales al valor especificado */
db.inventory01.find({ status: { $eq:"D"}})
/*El operador $gt devuelve los valores mayores a la consulta especificada.*/
 db.inventory01.find( { qty: { $gt: 40 } } )
/*El operador $gte delvuelve los valores mayores o iguales a la consulta especificada.*/
db.inventory01.find( { qty: { $gte: 20 } } )
/*El operador $lt devuelve los valores menores a la consulta especificada.*/
db.inventory01.find( { qty: { $lt: 20 } } )
/*El operador $lte devuelve los valores menores o igual a la consulta especificada.*/
db.inventory01.find( { qty: { $lte: 20 } } )
/*El valor $ne devuelve los valores distintos al seleccionado.*/
db.inventory01.find( { qty: { $ne: 20 } } )
 /*El valor $nin devuelve los valores del campo no especificado en el array o si el campo no existe*/
 db.inventory01.find( { qty: { $nin: [ 5, 15 ] } } )
 /*El valor $and explícito devuelve los valores del campo distinto del especificado y si el campo existe*/
 db.inventory01.find ({$and: [{status:{$gt:"A"}},{status:{$lt:"D"}}]})
 /*El valor $and implícito delvuelve los valores del campo distinto del especificado y si el capo existe, aunque se escribe de distinta manera. */
 db.inventory01.find ( [{status:{$gt:"A", $lt:"D"}}])
