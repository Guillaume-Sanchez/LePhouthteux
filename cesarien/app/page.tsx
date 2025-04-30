'use client'
import SignleList from "@/src/components/singleListe";
import { Button } from "@/src/components/ui/button";
import { useState } from "react";

export default function Home(){

    const [screenAddList, setScreenAddList] = useState(false);
    const [nameList, setNameList] = useState("");
    const [newList, setNewList] = useState(false);

    const onClickAddList = () => {
        setNameList("");
        setScreenAddList(true);
    }

    const onClickCloseList = () => {
        setScreenAddList(false);
    }

    const onChangeNameList = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setNameList(e.target.value);
    }

    const addList = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (nameList.length > 0) {
            setScreenAddList(false);
            setNewList(true);
        } else {
            alert("Veuillez entrer un nom de liste valide");
        }
    }

    return (
        <main className="container mx-auto p-6 rounded-xl border my-10 bg-gray-500 h-">
            <section className=" p-3">
                <div className="flex flex-wrap items-center justify-between mb-4">
                    <h2 className="text-white text-2xl">Vos liste de tâche</h2>
                    <Button onClick={onClickAddList} className="modal-button bg-gray-800">Créer un ticket</Button>
                </div>
                <div id="ListContent" className="flex flex-wrap items-center justify-start">
                    <SignleList name={"TestList1"} />
                    <SignleList name={"TestList2"} />
                    <SignleList name={"TestList3"} />
                    <SignleList name={"TestList4"} />
                    <SignleList name={"TestList5"} />
                    {
                        newList && (
                            <SignleList name={nameList}/>
                        )
                    }
                </div>
            </section>
            {
                screenAddList && (
                    <div className="bg-[#000000d9] fixed top-0 left-0 flex items-center justify-center size-full">
                        <form className="bg-white flex flex-col gap-2 mt-4 overflow-auto p-20" onSubmit={addList}>
                            <h2 className="text-2xl">Créer une nouvelle liste</h2>
                            <input
                                type="text"
                                placeholder="Nom de la liste"
                                value={nameList}
                                onChange={onChangeNameList}
                                className="border border-gray-300 rounded-md p-2"
                            />
                            <Button
                                type="submit"
                                className="bg-gray-800 text-white rounded-md p-2 mt-4 hover:bg-gray-500 transition duration-200"
                            >
                                Créer
                            </Button>
                            <Button className="bg-red-500 text-white rounded-md p-2 mt-4 hover:bg-red-700 transition duration-200" onClick={onClickCloseList}>
                                Annuler
                            </Button>
                        </form>
                    </div>
                )
            }
        </main>
    );
}
