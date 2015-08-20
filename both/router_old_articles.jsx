/*FlowRouter.route('/uslugi', {
  name: 'uslugi',
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="uslugi"/>
    });
  }
});
FlowRouter.route('/prezentatsiya-studycz-com', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', "prezentatsiya-studycz-com"));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="prezentatsiya-studycz-com" />
    });
  }
});
FlowRouter.route('/nemnogo-o-postuplenii-na-rezhissuru-v-chehii', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', "nemnogo-o-postuplenii-na-rezhissuru-v-chehii"));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="nemnogo-o-postuplenii-na-rezhissuru-v-chehii" />
    });
  }
});

FlowRouter.route('/sotsialnaya-set-i-baza-znaniy-studycz-com', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', "sotsialnaya-set-i-baza-znaniy-studycz-com"));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="sotsialnaya-set-i-baza-znaniy-studycz-com" />
    });
  }
});
FlowRouter.route('/cvut-arhitektura-bc-ekzameny', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', "cvut-arhitektura-bc-ekzameny"));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="cvut-arhitektura-bc-ekzameny" />
    });
  }
});
FlowRouter.route('/kuratorstvo-vremennaya-skidka-100-evro', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', "kuratorstvo-vremennaya-skidka-100-evro"));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="kuratorstvo-vremennaya-skidka-100-evro" />
    });
  }
});
FlowRouter.route('/gde-v-chehii-izuchat-marketing-i-pr', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', "gde-v-chehii-izuchat-marketing-i-pr"));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="gde-v-chehii-izuchat-marketing-i-pr" />
    });
  }
});
FlowRouter.route('/gde-v-chehii-izuchat-mezhdunarodnyie-otnosheniya-i-politologiyu', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', "gde-v-chehii-izuchat-mezhdunarodnyie-otnosheniya-i-politologiyu"));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="gde-v-chehii-izuchat-mezhdunarodnyie-otnosheniya-i-politologiyu" />
    });
  }
});
FlowRouter.route('/voprosyi-i-otvetyi-o-zhizni-i-uchebe-v-chehii-perepiska-vk', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'voprosyi-i-otvetyi-o-zhizni-i-uchebe-v-chehii-perepiska-vk'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="voprosyi-i-otvetyi-o-zhizni-i-uchebe-v-chehii-perepiska-vk" />
    });
  }
});
FlowRouter.route('/podtverzhdenie-srednego-obrazovaniya-v-chehii-nostrifikatsiya', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'podtverzhdenie-srednego-obrazovaniya-v-chehii-nostrifikatsiya'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="podtverzhdenie-srednego-obrazovaniya-v-chehii-nostrifikatsiya" />
    });
  }
});
FlowRouter.route('/postuplenie-na-fakultet-multimediynyih-kommunikatsiy-universiteta-tomasha-bati-v-zline', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'postuplenie-na-fakultet-multimediynyih-kommunikatsiy-universiteta-tomasha-bati-v-zline'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="postuplenie-na-fakultet-multimediynyih-kommunikatsiy-universiteta-tomasha-bati-v-zline" />
    });
  }
});
FlowRouter.route('/postuplenie-na-fakultet-dizayna-i-iskusstva-zapadocheshskogo-universiteta-v-plzni', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'postuplenie-na-fakultet-dizayna-i-iskusstva-zapadocheshskogo-universiteta-v-plzni'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="postuplenie-na-fakultet-dizayna-i-iskusstva-zapadocheshskogo-universiteta-v-plzni" />
    });
  }
});
FlowRouter.route('/obuchenie-v-chehii-posle-26-let', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'obuchenie-v-chehii-posle-26-let'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="obuchenie-v-chehii-posle-26-let" />
    });
  }
});
FlowRouter.route('/podacha-zayavok-v-vuzyi', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'podacha-zayavok-v-vuzyi'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="podacha-zayavok-v-vuzyi" />
    });
  }
});
FlowRouter.route('/v-kakie-cheshskie-universitetyi-mozhno-podat-zayavki-v-mae-i-letom', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'v-kakie-cheshskie-universitetyi-mozhno-podat-zayavki-v-mae-i-letom'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="v-kakie-cheshskie-universitetyi-mozhno-podat-zayavki-v-mae-i-letom" />
    });
  }
});
FlowRouter.route('/postuplenie-na-ekonomicheskie-spetsializatsii-v-cheshskih-vuzah', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'postuplenie-na-ekonomicheskie-spetsializatsii-v-cheshskih-vuzah'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="postuplenie-na-ekonomicheskie-spetsializatsii-v-cheshskih-vuzah" />
    });
  }
});
FlowRouter.route('/kak-postupit-v-vyisshuyu-shkolu-prikladnogo-iskusstva-v-prage-vsup-vshup', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'kak-postupit-v-vyisshuyu-shkolu-prikladnogo-iskusstva-v-prage-vsup-vshup'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="kak-postupit-v-vyisshuyu-shkolu-prikladnogo-iskusstva-v-prage-vsup-vshup" />
    });
  }
});
FlowRouter.route('/spisok-gosudarstvennyih-vuzov-chehii-s-postupleniem-bez-vstupitelnyih-ekzamnov', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'spisok-gosudarstvennyih-vuzov-chehii-s-postupleniem-bez-vstupitelnyih-ekzamnov'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="spisok-gosudarstvennyih-vuzov-chehii-s-postupleniem-bez-vstupitelnyih-ekzamnov" />
    });
  }
});
FlowRouter.route('/postuplenie-na-bakalavriat-fakulteta-iskusstv-i-dizayna-fud-universiteta-yana-evangelista-purkine-ujep-v-usti-nad-labem', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'postuplenie-na-bakalavriat-fakulteta-iskusstv-i-dizayna-fud-universiteta-yana-evangelista-purkine-ujep-v-usti-nad-labem'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="postuplenie-na-bakalavriat-fakulteta-iskusstv-i-dizayna-fud-universiteta-yana-evangelista-purkine-ujep-v-usti-nad-labem" />
    });
  }
});
FlowRouter.route('/postuplenie-na-fakultet-izobrazitelnyih-iskusstv-vut-v-brne', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'postuplenie-na-fakultet-izobrazitelnyih-iskusstv-vut-v-brne'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="postuplenie-na-fakultet-izobrazitelnyih-iskusstv-vut-v-brne" />
    });
  }
});
FlowRouter.route('/obuchenie-na-provizora-na-farmatsevticheskom-fakultete-karlova-universiteta-v-gradets-kralove', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'obuchenie-na-provizora-na-farmatsevticheskom-fakultete-karlova-universiteta-v-gradets-kralove'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="obuchenie-na-provizora-na-farmatsevticheskom-fakultete-karlova-universiteta-v-gradets-kralove" />
    });
  }
});
FlowRouter.route('/postuplenie-na-bakalavr-fakulteta-restavratsii-v-pardubitskom-universitete-univerzita-pardubice', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'postuplenie-na-bakalavr-fakulteta-restavratsii-v-pardubitskom-universitete-univerzita-pardubice'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="postuplenie-na-bakalavr-fakulteta-restavratsii-v-pardubitskom-universitete-univerzita-pardubice" />
    });
  }
});
FlowRouter.route('/kratko-o-postuplenii-v-karlov-universitet-na-yuridicheskiy-fakultet', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'kratko-o-postuplenii-v-karlov-universitet-na-yuridicheskiy-fakultet'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="kratko-o-postuplenii-v-karlov-universitet-na-yuridicheskiy-fakultet" />
    });
  }
});
FlowRouter.route('/gde-izuchat-izobrazitelnoe-iskusstvo-i-arhitekturu-v-chehii', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'gde-izuchat-izobrazitelnoe-iskusstvo-i-arhitekturu-v-chehii'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="gde-izuchat-izobrazitelnoe-iskusstvo-i-arhitekturu-v-chehii" />
    });
  }
});
FlowRouter.route('/magistratura-ekonomiki-v-karlovom-universitete-i-vyisshey-shkole-ekonomiki-vse', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'magistratura-ekonomiki-v-karlovom-universitete-i-vyisshey-shkole-ekonomiki-vse'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="magistratura-ekonomiki-v-karlovom-universitete-i-vyisshey-shkole-ekonomiki-vse" />
    });
  }
});
FlowRouter.route('/sdacha-nostrifikatsionnyih-ekzamenov-v-gimnazii-kladno', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'sdacha-nostrifikatsionnyih-ekzamenov-v-gimnazii-kladno'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="sdacha-nostrifikatsionnyih-ekzamenov-v-gimnazii-kladno" />
    });
  }
});
FlowRouter.route('/otzyv-o-vsup', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'otzyv-o-vsup'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="otzyv-o-vsup" />
    });
  }
});
FlowRouter.route('/aktualnyiy-poryadok-postupleniya-v-cheshskie-vuzyi-v-2014-godu', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'aktualnyiy-poryadok-postupleniya-v-cheshskie-vuzyi-v-2014-godu'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="aktualnyiy-poryadok-postupleniya-v-cheshskie-vuzyi-v-2014-godu" />
    });
  }
});
FlowRouter.route('/pochemu-chehiya-kratko-o-plyusah-i-minusah-zhizni-i-obrazovaniya', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'pochemu-chehiya-kratko-o-plyusah-i-minusah-zhizni-i-obrazovaniya'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="pochemu-chehiya-kratko-o-plyusah-i-minusah-zhizni-i-obrazovaniya" />
    });
  }
});
FlowRouter.route('/postuplenie-v-akademiyu-muzyiki-imeni-yanacheka-v-brno-jamu-cz', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'postuplenie-v-akademiyu-muzyiki-imeni-yanacheka-v-brno-jamu-cz'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="postuplenie-v-akademiyu-muzyiki-imeni-yanacheka-v-brno-jamu-cz" />
    });
  }
});
FlowRouter.route('/besplatnyiy-marafon-postupaem-vmeste-na-uchebu-v-chehii', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'besplatnyiy-marafon-postupaem-vmeste-na-uchebu-v-chehii'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="besplatnyiy-marafon-postupaem-vmeste-na-uchebu-v-chehii" />
    });
  }
});
FlowRouter.route('/ekzamenyi-pri-postuplenii-na-bakalavr-ekonomiki-v-karlov-universitet-i-vyisshuyu-shkolu-ekonomiki-v-prage', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'ekzamenyi-pri-postuplenii-na-bakalavr-ekonomiki-v-karlov-universitet-i-vyisshuyu-shkolu-ekonomiki-v-prage'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="ekzamenyi-pri-postuplenii-na-bakalavr-ekonomiki-v-karlov-universitet-i-vyisshuyu-shkolu-ekonomiki-v-prage" />
    });
  }
});
FlowRouter.route('/kak-podat-zayavku-v-zapadocheshskiy-universitet-v-plzni-kratko-o-nostrifikatsii', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'kak-podat-zayavku-v-zapadocheshskiy-universitet-v-plzni-kratko-o-nostrifikatsii'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="kak-podat-zayavku-v-zapadocheshskiy-universitet-v-plzni-kratko-o-nostrifikatsii" />
    });
  }
});
FlowRouter.route('/strahovka-na-kratkosrochnuyu-vizu-i-kratko-o-poluchenii-dolgosrochnoy-vizyi-v-politsii-chehii', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'strahovka-na-kratkosrochnuyu-vizu-i-kratko-o-poluchenii-dolgosrochnoy-vizyi-v-politsii-chehii'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="strahovka-na-kratkosrochnuyu-vizu-i-kratko-o-poluchenii-dolgosrochnoy-vizyi-v-politsii-chehii" />
    });
  }
});
FlowRouter.route('/kak-postupit-v-tehnicheskiy-universitet-v-prage', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', 'kak-postupit-v-tehnicheskiy-universitet-v-prage'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="kak-postupit-v-tehnicheskiy-universitet-v-prage" />
    });
  }
});
FlowRouter.route('/7-shagov-postupleniya-v-cheshskiy-vuz-poleznyie-sovetyi', {
  name: 'article',
  subscriptions: function() {
    this.register('singleOldArticle', Meteor.subscribe('singleOldArticle', '7-shagov-postupleniya-v-cheshskiy-vuz-poleznyie-sovetyi'));
  },
  action: function() {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug="7-shagov-postupleniya-v-cheshskiy-vuz-poleznyie-sovetyi" />
    });
  }
});
*/
