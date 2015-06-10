var Cola = require('./encolados');

describe('Ejercicio de encolados:', function() {
  
  var cola;

  beforeEach(function() {
    
    cola = new Cola();
  });

  it('dado una cola sin elementos al ejecutar obtener este debera ser nulo', function() {
    expect(cola.obtener()).toBeNull();
  });

  it('dado una cola sin elementos al ejecutar longitud este debera ser 0', function() {
    expect(cola.longitud()).toBe(0);
  });

  it('dado una cola con un elemento al ejecutar obtener se debera devolver el elemento y la longitud debera ser 0', function() {
    
    cola.agregar('elemento');

    expect(cola.obtener()).toBe('elemento');
    expect(cola.longitud()).toBe(0);
  });

  it('dado una cola con tres elementos al ejecutar obtener se debera devolver el primer elemento ingresado y la longitud debera ser 2', function() {
    
    cola.agregar('tres');
    cola.agregar('dos');
    cola.agregar('uno');
    
    expect(cola.obtener()).toBe('tres');
    expect(cola.longitud()).toBe(2);
  });

  it('dado una cola con tres elementos al ejecutar limpiar la longitud debera ser 0', function() {
    
    cola.agregar('tres');
    cola.agregar('dos');
    cola.agregar('uno');
    
    cola.limpiar();
    expect(cola.longitud()).toBe(0); 
  });

});