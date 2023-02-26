const mongoose = require ('mongoose');

const productoSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: [true, 'Por favor ingrese el nombre del producto'],
        trim:true,
        maxLength: [120, 'El nombre del producto no debe exceder los 120 caracteres']
    },
    categoria:{
        type: String,
        required: [true, 'Por favor ingrese la categoria del producto'],
        trim:true,
        maxLength: [120, 'La categoria del producto no debe exceder los 120 caracteres']
    },

    ubicacion:{
        type: String,
        required: [true, 'Por favor ingrese la ubicacion del producto'],
        trim:true,
        maxLength: [120, 'La ubicacion del producto no debe exceder los 120 caracteres']
    },

    precio:{
       type: Number,
       required: [true, 'Por favor ingrese el precio del producto'],
       maxLength: [8, 'El precio del producto no puede estar por encima de 9999999'],
       default:0.0
    },

    fecha:{
        type: Date,
        default: Date.now()
    }
 
})

module.exports = mongoose.model('Product', productoSchema)