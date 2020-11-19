INSERT INTO coffees (blend_name, brand, coffee_description, price, img)
    VALUES 
    ("Dark Horse Blend", "Five Senses", 
        "Crafted from distinctive origins, our Dark Horse blend offers up a complex and dynamic cup whether in milk or as a black coffee. Delicate herbal aromas lead into dark chocolate flavours, which swiftly open towards juicy blackcurrant notes and an extended syrupy body.",
    15, 250, "https://s28268.pcdn.co/wp-content/uploads/timber/c8e1726d6b75333faf24575624d2b6e0-600x0-c-default.png");

INSERT INTO users (user_name) VALUES
    ("McScruffy54");

INSERT INTO reviews (rating, review_text, user_id, coffee_id) VALUES   
    (4.5, 
        "Shifting, original, startling in its giddy intricacy. Winey pine (think retsina wine), cocoa powder, green apple, Concord grape, ginger blossom, much more in aroma and cup. Sweetly and delicately pungent in structure. Lightly syrupy and almost effervescently buoyant in mouthfeel. The winey pine character and a floral sweetness carry persuasively into a crisp finish.",
    1, 1);