$(document).ready(function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoZW51ZCIsImEiOiJjazlsZG83ZDQwM2g0M2dxdTJ5OTQ4OHh1In0.j_bRFfw78u98EwF_pTaNWw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ashenud/ck9lulkm62x0l1irzqu1pedgy',
        center: [80.6715, 7.9],
        zoom: 7
    });

    map.on('load', function() {
        map.addSource('maine', {
                    'type': 'geojson',
                    'data': {
                    'type': 'Feature',
                    'geometry': {
                            'type': 'Polygon',
                            'coordinates': [
                                [
                                    [79.6386939,6.939],[79.6386952,6.933],[79.6388779,6.927],[79.6392425,6.921],[79.639587,6.917],[79.6400133,6.913],[79.6405218,6.909],[79.6411131,6.905],[79.641788,6.901],[79.6425474,6.897],[79.6433921,6.893],[79.6443234,6.889],[79.6463625,6.881],[79.6480248,6.875],[79.6492465,6.871],[79.6505611,6.867],[79.653403,6.859],[79.6575333,6.843],[79.6580037,6.841],[79.6588055,6.837],[79.6596933,6.833],[79.6599542,6.831],[79.6601671,6.825],[79.660562,6.819],[79.66114,6.813],[79.6619026,6.807],[79.6628519,6.801],[79.6646771,6.791],[79.665944,6.785],[79.6673769,6.779],[79.6719714,6.761],[79.6736405,6.755],[79.6748619,6.751],[79.6761761,6.747],[79.6775851,6.743],[79.6790908,6.739],[79.6797395,6.737],[79.6812579,6.731],[79.6823433,6.727],[79.6835188,6.723],[79.6847863,6.719],[79.6861475,6.715],[79.6876045,6.711],[79.6891595,6.707],[79.6940606,6.695],[79.6969962,6.687],[79.7038097,6.669],[79.8968379,6.7161367],[79.8966684,6.7162512],[79.8965556,6.7164282],[79.8964801,6.7168415],[79.8965101,6.7169241],[79.8965897,6.7169675],[79.8966691,6.7169662],[79.8967194,6.7168881],[79.8967857,6.7165527],[79.8968237,6.716477],[79.8968805,6.7163997],[79.8969451,6.7163482],[79.8971097,6.7163332],[79.8979526,6.7163313],[79.8988321,6.7163697],[79.8992071,6.7163185],[79.8993279,6.7162329],[79.8993883,6.7162268],[79.8994638,6.7161843],[79.8995564,6.7162206],[79.8996574,6.7165264],[79.9008861,6.7158033],[79.9013141,6.7156047],[79.901784,6.7155605],[79.90222,6.7156662],[79.9025996,6.7159052],[79.9028826,6.7162531],[79.9037966,6.7183401],[79.9041735,6.7202441],[79.9039115,6.7223984],[79.9029429,6.7260041],[79.9013157,6.7331545],[79.9001466,6.7371125],[79.8986711,6.7409738],[79.8952752,6.7470011],[79.894914,6.7515932],[79.8935412,6.752813],[79.8926741,6.7544633],[79.8924574,6.7562571],[79.8929631,6.7589119],[79.893884,6.7616467],[79.8938361,6.7623319],[79.8933507,6.7639047],[79.8905407,6.7669488],[79.8883949,6.7695109],[79.8871432,6.7710837],[79.8865812,6.7719462],[79.8866578,6.7731385],[79.8869899,6.7741531],[79.887884,6.7751678],[79.8891471,6.7759233],[79.8900809,6.7764869],[79.8910882,6.7768755],[79.8934894,6.776977],[79.8959929,6.7768755],[79.8978066,6.7761145],[79.8991605,6.7748715],[79.8999524,6.7734256],[79.9004378,6.7725631],[79.9013267,6.7714279],[79.903675,6.7693113],[79.90624,6.7678763],[79.9072515,6.767374],[79.9087327,6.7670153],[79.9100694,6.7663336],[79.9127789,6.7647551],[79.915091,6.762782],[79.9162832,6.761921],[79.917078,6.7609524],[79.9181257,6.7591227],[79.9184147,6.7577594],[79.9181915,6.7555506],[79.9175011,6.7536619],[79.9165827,6.7527046],[79.9177644,6.7496514],[79.9194262,6.7490415],[79.9231473,6.7489339],[79.9259283,6.7478582],[79.9362742,6.7482387],[79.9384188,6.748695],[79.9411888,6.7488905],[79.9425068,6.7491438],[79.9442599,6.7492087],[79.9455499,6.7497287],[79.9465507,6.7505616],[79.9472149,6.7520963],[79.9475215,6.7531872],[79.9476747,6.7543414],[79.9477897,6.7564089],[79.9480439,6.7569002],[79.94821,6.7572554],[79.949219,6.7584604],[79.9501131,6.7599697],[79.9508028,6.7606927],[79.9513265,6.7613269],[79.9518502,6.7615299],[79.9524122,6.7614157],[79.9535546,6.7604764],[79.9558486,6.7594181],[79.9579259,6.7587005],[79.9600032,6.7585032],[79.9618276,6.7584674],[79.9636778,6.7587606],[79.9648424,6.7591026],[79.9662438,6.7598074],[79.9674326,6.7605962],[79.9682455,6.7609819],[79.9690403,6.7611792],[79.9699976,6.7611882],[79.9707473,6.7610626],[79.9716032,6.7608885],[79.972026,6.7608585],[79.973587,6.7608851],[79.9740759,6.7608075],[79.9758952,6.7596946],[79.9774526,6.7590876],[79.9785588,6.7590442],[79.9796649,6.7593622],[79.980879,6.759979],[79.9827965,6.7620147],[79.9833885,6.7623306],[79.9855976,6.7627781],[79.9869848,6.7627694],[79.9892204,6.7621376],[79.989998,6.7621376],[79.990696,6.7624447],[79.9915178,6.7634099],[79.9928167,6.7661564],[79.9935943,6.7670338],[79.9941421,6.7672971],[79.9962275,6.7687975],[79.9986044,6.7704559],[79.9995057,6.7709298],[80.0018119,6.7710614],[80.0026425,6.7712632],[80.0035615,6.7717195],[80.0045335,6.772632],[80.0051255,6.7739043],[80.0051078,6.776642],[80.005585,6.7774755],[80.0060886,6.7779142],[80.0066011,6.778195],[80.0082825,6.7787308],[80.0088279,6.77909],[80.0094817,6.7795814],[80.0100384,6.7802833],[80.0104594,6.7813004],[80.010851,6.783282],[80.011264,6.7841076],[80.0116664,6.7846403],[80.0120258,6.7849653],[80.0126534,6.7853009],[80.013281,6.7854607],[80.0141179,6.7855139],[80.0147992,6.7858335],[80.0150889,6.7860839],[80.015223,6.7864355],[80.0152283,6.7869149],[80.0150942,6.7872824],[80.0147294,6.7876926],[80.0137048,6.7885236],[80.0136673,6.7888325],[80.0140696,6.7891042],[80.014708,6.7891948],[80.0211882,6.7905158],[80.0227814,6.791171],[80.0240045,6.7919434],[80.0259035,6.7929342],[80.0270515,6.7946494],[80.0276094,6.7962261],[80.0281029,6.7967375],[80.0291744,6.7972477],[80.0299268,6.7978348],[80.031107,6.7994328],[80.0322335,6.8002211],[80.0329416,6.8008923],[80.0337782,6.801891],[80.034322,6.8027841],[80.0345113,6.8034344],[80.0348606,6.8060358],[80.0351371,6.8064116],[80.0358066,6.806585],[80.0384556,6.806137],[80.0401003,6.8054144],[80.0409154,6.8053132],[80.0419779,6.8048507],[80.0426558,6.8040455],[80.0432284,6.8019943],[80.0443583,6.7998131],[80.0453844,6.7986569],[80.0463304,6.797992],[80.0474148,6.7975151],[80.0499182,6.7964023],[80.0506102,6.7957605],[80.0513882,6.794892],[80.0529165,6.7935551],[80.0548377,6.7924206],[80.0564606,6.7919003],[80.0582872,6.7917702],[80.0599381,6.7925806],[80.0610914,6.79363],[80.0615206,6.7939496],[80.0619551,6.7940508],[80.062454,6.7940881],[80.0638165,6.7936459],[80.0645246,6.7935447],[80.0653132,6.7935447],[80.0656941,6.7937099],[80.0660428,6.7941094],[80.0661447,6.7947326],[80.0662144,6.7982749],[80.0692006,6.8054362],[80.0719696,6.8094491],[80.0734066,6.8125255],[80.0753505,6.8152629],[80.0767643,6.816228],[80.0788786,6.8166563],[80.0817656,6.8159648],[80.0837095,6.8150348],[80.0842397,6.8143329],[80.0848052,6.813982],[80.0858656,6.8139995],[80.0872794,6.8149997],[80.0880923,6.8150699],[80.0886149,6.8148531],[80.0895692,6.8135019],[80.0903998,6.8110277],[80.0903821,6.8088518],[80.0906889,6.8080762],[80.0919013,6.8067445],[80.0935106,6.8056685],[80.0965791,6.8044221],[80.0975769,6.8038788],[80.0981195,6.8034836],[80.0984671,6.8028766],[80.0987069,6.8019601],[80.098599,6.8012459],[80.0979785,6.7993637],[80.0977092,6.7974343],[80.0977311,6.794551],[80.0977456,6.7925854],[80.098044,6.7913786],[80.0987717,6.7903091],[80.1006532,6.788259],[80.1011939,6.7872012],[80.1015115,6.7858459],[80.101592,6.7844982],[80.1018736,6.7817501],[80.1021553,6.7804498],[80.1052988,6.7742386],[80.1059533,6.7733863],[80.1077952,6.7722559],[80.108734,6.7715688],[80.1091256,6.7711213],[80.1097009,6.7706099],[80.1106719,6.7700452],[80.1114176,6.7697842],[80.1124529,6.7696936],[80.1137672,6.7697949],[80.1156474,6.7701917],[80.1198411,6.7703596],[80.1222014,6.7713823],[80.1236712,6.7724903],[80.1246261,6.7743015],[80.1240575,6.7767838],[80.1246046,6.7794899],[80.1257097,6.7821853],[80.1255702,6.7843161],[80.1239287,6.7895151],[80.1232313,6.7908574],[80.1209783,6.7929668],[80.1207101,6.7935634],[80.1207852,6.7946074],[80.1214289,6.7959817],[80.1213431,6.796557],[80.1204204,6.7976117],[80.1187467,6.7984001],[80.1177596,6.7991991],[80.1162469,6.8013191],[80.1155495,6.8030236],[80.1156031,6.8041848],[80.1164132,6.8052182],[80.1173787,6.8058041],[80.1217508,6.8074287],[80.1246556,6.8089149],[80.1303526,6.8125476],[80.1314577,6.8137194],[80.1325761,6.8151576],[80.1337456,6.8159246],[80.1376294,6.8172349],[80.1429831,6.8190459],[80.1442169,6.8200047],[80.1466417,6.8226786],[80.1484461,6.823885],[80.1493259,6.8240661],[80.152405,6.8239276],[80.1541753,6.8235015],[80.1558597,6.8234376],[80.1569219,6.8230008],[80.1591213,6.8210513],[80.1612134,6.8180898],[80.1618571,6.8168296],[80.1626135,6.8156389],[80.1633145,6.8149429],[80.1641632,6.8143567],[80.1656206,6.8143384],[80.1668926,6.8146251],[80.1675023,6.8147963],[80.1688121,6.8148696],[80.1703064,6.8151444],[80.171321,6.8155474],[80.1720774,6.8159687],[80.1725386,6.8164816],[80.1733674,6.8174756],[80.1737377,6.8188354],[80.1738037,6.8192295],[80.1739406,6.8196322],[80.1739838,6.8197213],[80.1740653,6.8198152],[80.1741701,6.8199212],[80.1744502,6.8199285],[80.1747155,6.8199253],[80.1748839,6.8198475],[80.1750381,6.8197252],[80.1751685,6.81962],[80.175349,6.8193874],[80.1754687,6.8191425],[80.1755858,6.8187863],[80.1756609,6.8180202],[80.1757595,6.8173998],[80.1758769,6.8170372],[80.176053,6.8166939],[80.1762141,6.8164173],[80.1764424,6.8161874],[80.1766544,6.8160255],[80.1770686,6.8157988],[80.1773554,6.8157462],[80.1777303,6.8157656],[80.1778031,6.8164154],[80.1780029,6.8165742],[80.1784959,6.8166271],[80.1787648,6.8164877],[80.1796175,6.8147415],[80.1800971,6.8141991],[80.1803369,6.8140139],[80.1811362,6.8141727],[80.1816691,6.814768],[80.1820663,6.815377],[80.182525,6.8156267],[80.1830379,6.815673],[80.1842103,6.8155275],[80.1845567,6.8155142],[80.1848831,6.8155804],[80.1852095,6.8157325],[80.1854627,6.8159375],[80.1859156,6.8165328],[80.1863086,6.8173265],[80.1868082,6.8184311],[80.1869615,6.8186361],[80.1871867,6.8187898],[80.1874173,6.8186716],[80.1876704,6.8181623],[80.1880301,6.8164558],[80.1883229,6.8155389],[80.1885175,6.8152931],[80.1889638,6.8149822],[80.1897232,6.8146713],[80.1907024,6.8144067],[80.1913752,6.8143472],[80.1943172,6.8143718],[80.1969075,6.8145492],[80.1984524,6.8149607],[80.1995075,6.8154097],[80.2000997,6.8159401],[80.201161,6.8173553],[80.2020667,6.8194196],[80.2022395,6.8204795],[80.2024007,6.8228077],[80.2024467,6.8252126],[80.2025826,6.8298468],[80.2021563,6.8316987],[80.200531,6.8337094],[80.1991916,6.8355251],[80.1986502,6.837228],[80.1986658,6.8396884],[80.198346,6.8422017],[80.1965342,6.8447943],[80.1953867,6.8466776],[80.194991,6.8486605],[80.194633,6.8505125],[80.1942261,6.8515077],[80.1935623,6.8524876],[80.1923876,6.8534786],[80.191455,6.8539548],[80.190669,6.8541796],[80.189883,6.8542326],[80.1888171,6.8545368],[80.1876714,6.8550394],[80.1858862,6.8554892],[80.1846046,6.855706],[80.18194,6.8560235],[80.1794087,6.8566187],[80.1772505,6.8574917],[80.1759582,6.8580737],[80.1752654,6.8586425],[80.1750491,6.8591008],[80.1750087,6.8599119],[80.1752348,6.8606789],[80.1761957,6.862138],[80.1768552,6.8639712],[80.178532,6.8656734],[80.1795035,6.8662736],[80.1802948,6.8679758],[80.1807375,6.8698842],[80.1816812,6.8763971],[80.1832785,6.8814129],[80.1833539,6.8845928],[80.1837307,6.8865007],[80.188554,6.8902043],[80.190099,6.8925985],[80.1896078,6.895151],[80.1887047,6.8979481],[80.1887034,6.8987049],[80.1888931,6.8995193],[80.1909839,6.9005388],[80.1945976,6.9041493],[80.1961759,6.9041493],[80.1981353,6.9034469],[80.1998769,6.903717],[80.2003667,6.9049057],[80.2002034,6.9068508],[80.2004756,6.9086878],[80.2028703,6.9109031],[80.2036867,6.912578],[80.2046663,6.9134425],[80.2067889,6.9136586],[80.2094013,6.9149553],[80.21167,6.917873],[80.2126704,6.9199564],[80.2127815,6.9217773],[80.2123368,6.9252536],[80.2109472,6.928454],[80.2081527,6.9367625],[80.2080908,6.9373562],[80.2082019,6.9379632],[80.2089245,6.9385288],[80.2099945,6.9388047],[80.2115092,6.938846],[80.2130378,6.9387633],[80.2149694,6.9384598],[80.2171233,6.9374666],[80.2188047,6.9366527],[80.2204167,6.9366941],[80.2213061,6.9370528],[80.2221127,6.9379865],[80.2229214,6.9399866],[80.2231376,6.940845],[80.2232037,6.9416716],[80.2230671,6.9430918],[80.2225562,6.9456083],[80.2224284,6.9477347],[80.2225591,6.9496653],[80.2223599,6.9503815],[80.2218736,6.9510023],[80.2209842,6.9526989],[80.2206969,6.9532359],[80.2202904,6.9536331],[80.21999,6.9542655],[80.219408,6.9548605],[80.2188997,6.9553091],[80.2179609,6.9558962],[80.2175331,6.9563954],[80.2174299,6.957069],[80.2175224,6.9576734],[80.2176833,6.9582192],[80.2183583,6.9593452],[80.2185359,6.9598439],[80.2184344,6.9604082],[80.2175564,6.9621915],[80.2173229,6.9631235],[80.2171961,6.9648413],[80.2172671,6.9657229],[80.2178863,6.968564],[80.2178457,6.9698385],[80.2178051,6.9715463],[80.2180893,6.9720651],[80.2182415,6.9726293],[80.2179573,6.9735613],[80.217054,6.975269],[80.2168307,6.9753496],[80.216039,6.9750725],[80.2148717,6.9740701],[80.2145976,6.9742061],[80.2144302,6.9743774],[80.213608,6.9761757],[80.2131868,6.9765586],[80.2128772,6.976614],[80.2115628,6.9765737],[80.2108269,6.9768105],[80.2096292,6.9778129],[80.2091673,6.9780497],[80.2072449,6.9787013],[80.2039819,6.9776287],[80.2029887,6.9771216],[80.2013436,6.9762816],[80.1992354,6.9761792],[80.1968642,6.977007],[80.1945486,6.9772142],[80.192841,6.9778655],[80.1907767,6.9785236],[80.1894238,6.9783823],[80.1873035,6.9759252],[80.1861762,6.9753543],[80.1836128,6.9750069],[80.1813534,6.9766613],[80.1795919,6.977412],[80.1792142,6.9776848],[80.178944,6.9779034],[80.1784056,6.9784388],[80.1775846,6.978596],[80.1756913,6.9785142],[80.174906,6.9786274],[80.1735527,6.9788559],[80.1728773,6.9790618],[80.1721367,6.9792808],[80.17069,6.9796917],[80.1692854,6.9794468],[80.168774,6.9789112],[80.1687762,6.9765726],[80.1689343,6.9736158],[80.1687783,6.972545],[80.168213,6.9715528],[80.1667978,6.9707772],[80.163316,6.9709876],[80.161663,6.971872],[80.1600815,6.9723093],[80.1584937,6.9727431],[80.1543762,6.9729093],[80.1516508,6.9740679],[80.1503226,6.9737782],[80.1479034,6.9735225],[80.1458789,6.9738731],[80.140403,6.9746457],[80.1358891,6.9745466],[80.132316,6.9754415],[80.1302524,6.9750074],[80.1283019,6.9745164],[80.1255865,6.9745843],[80.1245269,6.9746882],[80.1239677,6.9742662],[80.1235287,6.9733194],[80.1232733,6.971821],[80.1224247,6.9687891],[80.1220778,6.9680277],[80.12205,6.9665185],[80.121949,6.9659168],[80.1216766,6.9653892],[80.1205943,6.9649627],[80.1176793,6.9643567],[80.1158286,6.9633088],[80.114257,6.962847],[80.1124603,6.9629865],[80.1106153,6.9630737],[80.1099513,6.9628679],[80.1096708,6.9625156],[80.1096102,6.9620809],[80.1103951,6.9603219],[80.1102946,6.9596115],[80.1092497,6.9585004],[80.1086896,6.9577359],[80.1073507,6.9558763],[80.1063421,6.9539639],[80.105383,6.9535304],[80.1014713,6.9534364],[80.098714,6.9519518],[80.0985852,6.9516978],[80.0985008,6.9515315],[80.098389,6.9473866],[80.0981574,6.9463928],[80.0977421,6.9452028],[80.0972027,6.9443868],[80.095432,6.9420398],[80.0938337,6.9400933],[80.093639,6.9392406],[80.0937161,6.9383481],[80.0942588,6.9365813],[80.0951368,6.9357278],[80.0953093,6.9345203],[80.0951086,6.9328683],[80.094711,6.9316217],[80.0942435,6.9300244],[80.0949662,6.9267145],[80.0950613,6.9258646],[80.0949792,6.9247564],[80.0938388,6.9218743],[80.0933973,6.9206054],[80.0930481,6.918431],[80.0935537,6.91394],[80.0936424,6.9131524],[80.0932412,6.9123258],[80.0925374,6.9119361],[80.0920437,6.9119576],[80.0908293,6.9126444],[80.0888048,6.9136882],[80.0884124,6.913714],[80.0868564,6.9111373],[80.0857321,6.910274],[80.084509,6.9100104],[80.0831643,6.9099525],[80.0815583,6.910503],[80.0781575,6.9112353],[80.0770794,6.9109341],[80.0757217,6.908975],[80.0753355,6.9085187],[80.0747618,6.9083117],[80.0743341,6.9082718],[80.0737353,6.9082371],[80.073319,6.908313],[80.0730042,6.9085133],[80.0726359,6.9088724],[80.0721966,6.9091891],[80.0712907,6.9096831],[80.0702122,6.9103278],[80.0669536,6.9123634],[80.0657095,6.9129157],[80.0642225,6.9128254],[80.0637774,6.9122831],[80.0633425,6.910345],[80.0628064,6.9084471],[80.0621579,6.9080295],[80.0606417,6.9070714],[80.0584669,6.9073927],[80.0560797,6.9074028],[80.0549064,6.9074831],[80.0544006,6.9081861],[80.0548052,6.9097124],[80.0548356,6.9107668],[80.0543905,6.9121927],[80.0524281,6.9135484],[80.0499904,6.9136086],[80.0477144,6.9137191],[80.0460049,6.9143919],[80.0442044,6.9151751],[80.0422926,6.9166111],[80.0401988,6.9189708],[80.0326629,6.9220636],[80.0305387,6.9237707],[80.0278076,6.924815],[80.0253091,6.9250761],[80.0221222,6.9246289],[80.0202819,6.9247146],[80.0199582,6.9250761],[80.0192074,6.9276415],[80.0188777,6.9301949],[80.0180483,6.9328458],[80.0166688,6.9350051],[80.0149864,6.9369731],[80.0144028,6.9378035],[80.0139789,6.9385881],[80.0136583,6.9393726],[80.0134881,6.9409232],[80.0135174,6.9413607],[80.0135782,6.9417343],[80.0136686,6.9421078],[80.0142698,6.9436207],[80.0144327,6.9446131],[80.0144574,6.9454976],[80.0144272,6.9459995],[80.014375,6.9462854],[80.0141786,6.9466338],[80.0139239,6.9468392],[80.0135606,6.9470053],[80.01298,6.9469216],[80.0109872,6.9458295],[80.0096675,6.945157],[80.0091852,6.9449787],[80.0076705,6.944854],[80.0046733,6.9440333],[80.0035126,6.9435397],[80.0013784,6.9424452],[80.0010262,6.9423267],[80.0006246,6.9422867],[79.999851,6.9423046],[79.9972206,6.9435333],[79.9954812,6.944363],[79.9933974,6.9440116],[79.9895602,6.9410838],[79.9878436,6.937484],[79.986691,6.9356372],[79.9861448,6.9353561],[79.9856289,6.9354665],[79.9853689,6.9358555],[79.9851434,6.9367117],[79.9844555,6.9375752],[79.9826508,6.9386342],[79.9805207,6.9390713],[79.9774356,6.9390814],[79.9724892,6.938017],[79.9706786,6.9375451],[79.9698406,6.9375692],[79.9688965,6.9382721],[79.968804,6.9383271],[79.9659851,6.9400052],[79.9631222,6.9412058],[79.9597946,6.9416419],[79.954828,6.9432484],[79.953861,6.9431166],[79.9531055,6.9425897],[79.9524032,6.9417085],[79.9516229,6.9412223],[79.9506798,6.9405024],[79.9492422,6.9397755],[79.9475305,6.9389988],[79.9457137,6.9384263],[79.9450151,6.9383066],[79.9443659,6.9383018],[79.94372,6.9385134],[79.9432437,6.9390107],[79.9430807,6.9395186],[79.9430305,6.9400219],[79.9430339,6.9406055],[79.9430944,6.9410524],[79.9432347,6.9414693],[79.9433008,6.9417655],[79.9433298,6.9420494],[79.9433278,6.9422769],[79.9432494,6.9425375],[79.9431323,6.9426926],[79.9428934,6.942986],[79.941969,6.9437451],[79.9388965,6.944912],[79.9367507,6.9469781],[79.9347136,6.9502331],[79.9332746,6.9506629],[79.9311073,6.9504712],[79.9279745,6.9490655],[79.9268819,6.9492197],[79.9259438,6.9494707],[79.9256722,6.9508256],[79.9249792,6.9516436],[79.9242558,6.9522098],[79.9233159,6.9524575],[79.9223741,6.9524947],[79.9211368,6.9517435],[79.9207258,6.9511025],[79.9204429,6.9495341],[79.9188911,6.9470448],[79.9177389,6.9461925],[79.9162372,6.9455936],[79.9126967,6.9466586],[79.9118751,6.9474455],[79.911692,6.9483786],[79.9114054,6.9497111],[79.9108337,6.9504233],[79.9100574,6.9504712],[79.9087485,6.9494702],[79.9074395,6.9486821],[79.9052294,6.9476171],[79.9031909,6.9469994],[79.9003134,6.947252],[79.8982342,6.9478727],[79.8972724,6.9492306],[79.8967778,6.9496175],[79.8963375,6.9509433],[79.8963668,6.9516062],[79.8968218,6.952138],[79.8983572,6.9524254],[79.8985172,6.9524553],[79.8999076,6.9534265],[79.9005428,6.9545171],[79.8999076,6.9559229],[79.8972658,6.956308],[79.8955045,6.9558547],[79.8929581,6.954965],[79.8899104,6.9545654],[79.8863283,6.9541038],[79.8834409,6.9543371],[79.882519,6.9546311],[79.8815484,6.9552157],[79.8792058,6.9583287],[79.8785796,6.9600301],[79.878414,6.9630744],[79.8785991,6.9636856],[79.8791366,6.9653713],[79.881454,6.9674757],[79.8836349,6.970417],[79.8844963,6.9720205],[79.8849529,6.9737575],[79.8848872,6.9764128],[79.884458,6.9779447],[79.8835225,6.9793861],[79.8807416,6.9811922],[79.8804928,6.9812224],[79.8793605,6.9813596],[79.877176,6.980831],[79.8745034,6.9807513],[79.8739524,6.9807322],[79.8699168,6.979135],[79.6553147,7.025],[79.6538827,7.021],[79.6519128,7.015],[79.6501509,7.009],[79.6485913,7.003],[79.6476616,6.999],[79.6468184,6.995],[79.6453213,6.987],[79.6443038,6.983],[79.6429418,6.977],[79.6421415,6.973],[79.6414262,6.969],[79.6407948,6.965],[79.6400035,6.959],[79.639579,6.955],[79.6390951,6.949],[79.638874,6.945],[79.6386939,6.939]]
                            ]
                        }
                    }
        });
        map.addLayer({
            'id': 'maine',
            'type': 'fill',
            'source': 'maine',
            'layout': {},
            'paint': {
                'fill-color': '#088',
                'fill-opacity': 0.8
            }
        });
    });



});