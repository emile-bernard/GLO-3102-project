import os
from bs4 import BeautifulSoup

def extract():
    path = os.path.join(os.getcwd(), "artistAlbums.txt")
    with open(path, "r") as infile:
        content = infile.read()
    soup = BeautifulSoup(content, "lxml")
    data = []
    template = "[{{ title: '{}' }}, {{ genre: '{}' }}, {{ refLink: '{}' }}, {{ imgSrc: '{}' }}, {{ copyright: '{}' }}]"
    for link in soup.find_all("div","album"):
        title = link.find("h3").text
        genre_tag, copyright_tag = link.find_all("p")
        genre = genre_tag.text
        refLink = link.find("a")["href"]
        imgSrc = link.find("img")["src"]
        copyright = copyright_tag.text
        data.append(template.format(title, genre, refLink, imgSrc, copyright))
    path = os.path.join(os.getcwd(), "artistAlbumsExport.txt")
    with open(path, "w") as outfile:
        outfile.write(",\n".join(reversed(data)))

if __name__ == '__main__':
    extract()
