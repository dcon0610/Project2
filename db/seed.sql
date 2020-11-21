INSERT INTO coffees (blend_name, brand, coffee_description, price, grams, img)
    VALUES 
    ("Dark Horse Blend", 
        "Five Senses", 
        "Crafted from distinctive origins, our Dark Horse blend offers up a complex and dynamic cup whether in milk or as a black coffee. Delicate herbal aromas lead into dark chocolate flavours, which swiftly open towards juicy blackcurrant notes and an extended syrupy body.",
        15, 
        250, 
        "https://s28268.pcdn.co/wp-content/uploads/timber/c8e1726d6b75333faf24575624d2b6e0-600x0-c-default.png"),
    ("Hi Fidelity Blend",
        "Five Senses",
        "Exploring all things sweet and clean, the Hi Fidelity blend is an elegant offering. A fresh cherry and blood orange acidity spring onto the palate, mellowing into a clean, candied finish.",
        15,
        250,
        "https://s28268.pcdn.co/wp-content/uploads/timber/1fd6fc16d38ebc96bb2eab906f74e1ae-600x0-c-default.png"),
    ("Crompton Road Blend",
        "Five Senses",
        "Named after the first home of Five Senses, our Crompton Road blend is all about comfort. With a nod towards more traditional flavour profiles, this blend is perfectly suited towards milk coffees. Rich flavours of bakers chocolate and marzipan envelope the entire palate, which seamlessly leads to a velvety body and a lingering creamy finish.",
        15,
        250,
        "https://s28268.pcdn.co/wp-content/uploads/timber/9998b8204f3282f64db124bee8f29ceb-600x0-c-default.png");

INSERT INTO users (user_name) VALUES
    ("McScruffy54"),
    ("DogLEGs4evR"),
    ("TheBeaninator"),
    ("leBeanboy"),
    ("fresh_AS_it_GETS"),
    ("cup_o_JOE"),
    ("morning brown");

INSERT INTO reviews (rating, review_text, user_id, coffee_id) VALUES   
    (4.5, 
        "Shifting, original, startling in its giddy intricacy. Winey pine (think retsina wine), cocoa powder, green apple, Concord grape, ginger blossom, much more in aroma and cup. Sweetly and delicately pungent in structure. Lightly syrupy and almost effervescently buoyant in mouthfeel. The winey pine character and a floral sweetness carry persuasively into a crisp finish.",
    1, 1),
    (4.7, 
        "Vast yet intimate in its layered intricacy: complete and perfectly balanced. Complex flowers (citrus blossom, ginger blossom, aromatic orchid), bright, fresh fruit (pear, peach, tangerine), sweet cocoa, sandalwood, a hint of candycap mushroom in aroma and cup. In structure, juicy and lyrically bright with a subtly pungent umami base; light-footed, satiny mouthfeel. Pear leads into long, vibrantly flavor-saturated finish.",
    2, 7),
    (3.2,
        "Lavish, captivatingly complex, deeply savory-sweet. Candycap mushroom, lilac, dark chocolate, dried coconut, frankincense in aroma and cup. Structurally, the savory component, which is typically an undertone, occupies the top of the aromatic and flavor range, with deep sweetness (fruit, florals) underneath. The mouthfeel is lively and richly syrupy. The seemingly eternal finish is a quiet mirror of the cup.",
    3, 2),
    (4.5,
        "High-toned, richly sweet-savory. Red currant, dark chocolate, tangerine zest, hop flowers, sandalwood in aroma and cup. Richly bittersweet structure with vibrant, juicy acidity; plush, syrupy mouthfeel. Deep, flavor-saturated finish with red currant and dark chocolate carrying well into the long.",
    2, 4)
    ;