#QUERY 1
SELECT name, language, percentage
FROM countries, languages
WHERE countries.id= languages.country_id AND languages.language = "Slovene";
#QUERY 2
SELECT countries.name, count(cities.name)
FROM countries
JOIN cities ON countries.id= cities.country_id
GROUP BY country_code
ORDER BY COUNT(cities.name) DESC;
#QUERY3
SELECT countries.name, cities.name, cities.population
FROM countries
JOIN cities ON countries.id= cities.country_id
WHERE countries.name="Mexico" AND cities.population < 500000
ORDER BY cities.population DESC;
#QUERY4
SELECT countries.name, language, percentage
FROM countries
JOIN languages ON countries.id= languages.country_id
WHERE percentage < 89;
#QUERY5
SELECT countries.name, surface_area, countries.population
FROM countries
WHERE surface_area < 501 AND population <100000;
#QUERY6
SELECT countries.name, government_form, capital, life_expectancy
FROM countries
WHERE government_form = "Constitutional Monarchy" AND capital >200 AND life_expectancy >75;
#QUERY7
SELECT countries.name, cities.name, cities.population, district
FROM countries
JOIN cities ON countries.id= cities.country_id
WHERE countries.name = "Argentina" AND district="Buenos Aires" AND cities.population > 500000;
#QUERY8
SELECT region, COUNT(countries.name)
FROM countries
GROUP BY region
ORDER BY COUNT(countries.name) DESC;