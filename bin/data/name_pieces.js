var nameGenerator = {};
// Pieces for creating the Username
nameGenerator.nameLib = {
    twos: [
        "ai", "ao", "au",
        "bo", "ba", "be", "bu", "bl",
        "co", "ci",
        "da", "de", "du",
        "fu", "fa", "fi", "fo",
        "go", "ga", "ge", "gi",
        "ho", "hu", "ha",
        "jo", "ju",
        "ko", "ku", 
        "ko", "ki", "kt",
        "lo", "la", "li", "lu",
        "mo", "ma", "me", "mi", "mu",
        "no", "na", "ne",
        "ou", "on", "om",
        "po", "pa", "pu", "pe",
        "so", "su",
        "to", "ta", "ti", "tu",
        "vo", "va", "vu",
        "zo", "za", "zu", "zi"
    ],
    threes: [
        "ann", "aki", "auk", "avo", "ave",
        "bob", "ban", "buo", "buu", "blu",
        "can", "coa", "cun", "cai", "cek",
        "dao", "dun", "dek", "dan",
        "fao", "fue", "fan", "foo",
        "gao", "gue", "gau", "gon", "gin",
        "hao", "hei", "hun", "hei", "hon",
        "jao", "jou", "jin", "jag",
        "kao", "kou", "kai", "kan", "keg", "kas",
        "lao", "lua", "lee", "lou", "lin", "lon", "laa",
        "mas", "mug", "mog", "mub", "meb",
        "nan", "nuu", "non", "noi",
        "ova", "oni", "ono", "oma",
        "pau", "pon", "poi",
        "roo", "rau", "roi",
        "sai", "soa", "sau", "son", "sei",
        "tau", "toi", "tan", "tao", 
        "umu", "umi", "ujo", "uhu", "usi",
        "vau", "vam", "von", "vio",
        "zau", "zoi", "zen", "zak", "zam"
    ],
    mids: [
        "an", "aus", "auu", 
        "bi", "ben", "buu", "bui",
        "cao", "cuo",
        "fon", 
        "gen",
        "han",
        "iss",
        "jiu",
        "kon", 
        "los", "luu", 
        "mee", "mao",
        "non", "nai",
        "o",
        "pon", "pan",
        "ru", "ros", "rau",
        "so", "sao", "son",
        "to", "tan",
        "u",
        "van", "von", 
        "zan", "zon", "zai"]
};
// Patterns that combine the Pieces into a Name
nameGenerator.namingPatterns = [
    ["two", 0, "two"],
    ["two", 0, "three"],
    ["two", 0, "mid"],
    ["two", "two"],
    ["two", "three"],
    ["two", "two", "two"],
    ["two", "three", "two"],
    ["two", 0, "mid", 0, "two"],
    ["two", 0, "mid", 0, "three"],
    ["two", "two", 0, "two"],
    ["two", "two", 0, "three"],
    ["two", "two", 0, "mid", 0, "three"],
    ["three", 0, "two"],
    ["three", 0, "three"],
    ["three", 0, "mid"],
    ["three", "two"],
    ["three", "three"],
    ["three", "two", "two"],
    ["three", "three", "two"],
    ["three", 0, "mid", 0, "two"],
    ["three", 0, "mid", 0, "three"],
    ["mid", 0, "mid"]
];

module.exports = nameGenerator;