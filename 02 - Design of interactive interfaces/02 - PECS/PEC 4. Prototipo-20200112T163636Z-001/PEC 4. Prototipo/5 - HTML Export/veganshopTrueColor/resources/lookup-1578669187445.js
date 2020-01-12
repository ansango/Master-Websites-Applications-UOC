(function(window, undefined) {
  var dictionary = {
    "cf3e44a8-a0a1-4797-91c8-8bfd522e84db": "CategorieMan",
    "3bb9f773-8017-4458-8823-500c2bcb900d": "UserSignup",
    "e4b5c1eb-6a2a-465e-a52d-f39f481d0ba3": "Product_Detail",
    "f380a9ba-8cfe-45c3-b50d-c4ab9ff99696": "CategorieSales",
    "a513ac6c-c900-4f3a-ac31-df6e68a46ff8": "UserSignIn",
    "9716171c-f48b-48f1-8a7d-605537d81f0c": "Cart",
    "41db33d7-07aa-4628-874e-833da846a778": "CategorieArrivals",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "3b0a4de2-4bdf-4d98-9a87-8d84b747e66a": "CategorieBrands",
    "3ec058ed-881e-4231-8e90-e131fcf7fb22": "Shipping_Payment",
    "cb7477a2-6864-49f3-a83f-ef39cbd7e0de": "CategorieWomen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);