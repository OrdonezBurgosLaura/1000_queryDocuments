/* El método insert() inserta un documento o varios en una colección.*/
db.inventory01.insert([{item:"ebook",qty:34,size:{h: 30, w: 21, uom: "cm" },status: "B"}])
/*El método insertOne() inserta un documento en una colección.*/
db.inventory01.insertOne([{item:"ebook",qty:34,size:{h: 30, w: 21, uom: "cm" },status: "B"}])
/*El método insertMany() inserta varios documentos en una colección.*/
db.inventory01.insertMany([{ item:"ebook",qty:34,size:{h: 30, w: 21,uom:"cm"},status:"A"}, {item:"book",qty:41,size:{h: 30, w: 21,uom:"cm"},status:"C"}])