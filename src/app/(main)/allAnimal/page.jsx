
import AnimalClient from "@/components/AnimalClient";

const getAnimals = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/NafisaTabassum01/c375d7c0eb972be211183daa333e4b9c/raw/4d516914bac8faafdfdd44586fd95038fd27ccd1/gistfile1.txt"
  );
  return res.json();
};

export default async function AllAnimalpage() {
  const animals = await getAnimals();

  return <AnimalClient animals={animals} />;
}