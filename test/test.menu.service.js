describe('menuitems', function () {

  var menuitems;
  var $httpBackend;
  var item = {"id":35,"short_name":"SP8","name":"Sesame Beef",
    "description":"a few cuts of beef, breaded, deep-fried with sauce containing sesame seeds; served with lo mein on the side",
    "price_small":null,"price_large":19.95,"small_portion_name":null,"large_portion_name":null,
    "created_at":"2017-03-15T02:23:30.856Z","updated_at":"2017-03-15T02:23:30.856Z",
    "category_short_name":"SP","image_present":true};

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuitems = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
    });
  });

  it('should return Sesame Beef then no item error', function() {
    $httpBackend.whenGET('https://cbr500r.herokuapp.com/menu_items/SP8.json')
      .respond(item);
    // good response, item is there
    menuitems.getMenuItem('SP8').then(function(response) {
      expect(response).toEqual(item);
    })

    $httpBackend.flush();
  });

});