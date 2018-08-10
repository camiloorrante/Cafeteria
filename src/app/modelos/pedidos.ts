export class Pedidos {
    uid: string;
    status: string;
    platillos: Array<any>;
}

export const PEDIDOS = [
    {
        uid: 'Julio',
        status: 'Pendiente',
        platillos: [
            {
                nombre: 'Tacos a vapor',
                descripcion: 'Tacos de maíz surtidos preparados al vapor',
                foto: 'https://dummyimage.com/75x75.gif?text=foto'
            },
            {
                nombre: 'Agua de Sabor',
                descripcion: 'Fresa, Piña, Limonada, Coco, Pepino',
                foto: 'https://dummyimage.com/75x75.gif?text=foto'
            }
        ]
    },
    {
        uid: 'Julio',
        status: 'Servido',
        platillos: [
            {
                nombre: 'Tacos a vapor',
                descripcion: 'Tacos de maíz surtidos preparados al vapor',
                foto: 'https://dummyimage.com/75x75.gif?text=foto'
            }
        ]
    },
    {
        uid: 'Camilo',
        status: 'Servido',
        platillos: [
            {
                nombre: 'Tamales',
                descripcion: 'Orden de 5 tamales de relleno surtido',
                foto: 'https://dummyimage.com/75x75.gif?text=foto'
            },
            {
                nombre: 'Agua de Sabor',
                descripcion: 'Fresa, Piña, Limonada, Coco, Pepino',
                foto: 'https://dummyimage.com/75x75.gif?text=foto'
            }
        ]
    }

];


