USE trouve_ton_artisan;


-- CATEGORIES
INSERT INTO categorie (nom) VALUES
    ('Bâtiment'),
    ('Services'),
    ('Fabrication'),
    ('Alimentation');

-- SPECIALITES
INSERT INTO specialite (nom, categorie_id) VALUES
    ('Chauffagiste',    1),
    ('Électricien',     1),
    ('Menuisier',       1),
    ('Plombier',        1),
    ('Coiffeur',        2),
    ('Fleuriste',       2),
    ('Toiletteur',      2),
    ('Webdesign',       2),
    ('Bijoutier',       3),
    ('Couturier',       3),
    ('Ferronier',       3),
    ('Boucher',         4),
    ('Boulanger',       4),
    ('Chocolatier',     4),
    ('Traiteur',        4);

-- ARTISANS
INSERT INTO artisan
    (nom, localisation, email, site_web, description, note, image, specialite_id, top)
VALUES
    (
        'Orville Salmons', 
        'Evian', 
        'o-salmons@live.com', 
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        5.0,
        'chauffagiste_batiment.jpg',
        1,
        TRUE
    ),
    (
        'Mont Blanc Eléctricité', 
        'Chamonix', 
        'contact@mont-blanc-electricite.com', 
        'https://mont-blanc-electricite.com',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        4.5,
        'electricien_batiment.jpg',
        2,
        FALSE
    ),
    (
        'Boutot & fils', 
        'Bourg-en-bresse', 
        'boutot-menuiserie@gmail.com', 
        'https://boutot-menuiserie.com',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        4.7,
        'menuisier_batiment.jpg',
        3,
        FALSE
    ),
    (
        'Vallis Bellemare', 
        'Vienne', 
        'v.bellemare@gmail.com', 
        'https://plomberie-bellemare.com',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        4.0,
        'plombier_batiment.jpg',
        4,
        FALSE
    ),
    (
        'Royden Charbonneau', 
        'Saint-Priest', 
        'r.charbonneau@gmail.com', 
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        3.8,
        'coiffeur_1_services.jpg',
        5,
        FALSE
    ),
    (
        'Leala Dennis', 
        'Chambéry', 
        'l.dennos@hotmail.fr', 
        'https://coiffure-leala-chambery.fr',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        3.8,
        'coiffeur_2_services.jpg',
        5,
        FALSE
    ),
    (
        'C\'est sup\'hair', 
        'Romans-sur-Isère', 
        'sup-hair@gmail.com', 
        'https://sup-hair.fr',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        4.1,
        'coiffeur_3_services.jpg',
        5,
        FALSE
    ),
    (
        'Le monde des fleurs', 
        'Annonay', 
        'contact@le-monde-des-fleurs-annonay.fr', 
        'https://le-monde-des-fleurs-annonay.fr',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        4.6,
        'fleuriste_services.jpg',
        6,
        FALSE
    ),
    (
        'Valérie Laderoute', 
        'Valence', 
        'v-laredoute@gmail.com', 
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        4.5,
        'toiletteur_services.jpg',
        7,
        FALSE
    ),
    (
        'CM Graphisme', 
        'Valence', 
        'contact@cm-graphisme.com', 
        'https://cm-graphisme.com',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        4.4,
        'webdesign_services.jpg',
        8,
        FALSE
    ),
    (
        'Claude Quinn', 
        'Aix-les-bains', 
        'claude.quinn@gmail.com', 
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        4.2,
        'bijoutier_fabrication.jpg',
        9,
        FALSE
    ),
    (
        'Amitee Lécuyer', 
        'Annecy', 
        'a.amitee@hotmail.com', 
        'https://lecuyer-couture.com',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        4.5,
        'couturier_fabrication.jpg',
        10,
        FALSE
    ),
    (
        'Ernest Carignan', 
        'Le Puy-en-Velay', 
        'e-carigan@hotmail.com', 
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        5.0,
        'ferronier_fabrication.jpg',
        11,
        FALSE
    ),
    (
        'Boucherie Dumont', 
        'Lyon', 
        'boucherie.dumond@gmail.com', 
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        4.5,
        'boucher_alimentation.jpg',
        12,
        FALSE
    ),
    (
        'Au pain chaud', 
        'Montélimar', 
        'aupainchaud@hotmail.com', 
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        4.8,
        'boulanger_alimentation.jpg',
        13,
        TRUE
    ),
    (
        'Chocolaterie Labbé', 
        'Lyon', 
        'chocolaterie-labbe@gmail.com', 
        'https://chocolaterie-labbe.fr',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        4.9,
        'chocolatier_alimentation.jpg',
        14,
        TRUE
    ),
    (
        'Traiteur Truchon', 
        'Lyon', 
        'contact@truchon-traiteur.fr', 
        'https://truchon-traiteur.fr',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        4.1,
        'traiteur_alimentation.jpg',
        15,
        FALSE
    );
