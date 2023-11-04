import React from 'react';
import Background from "./components/background/Background";
import Form from "./components/form/Form";
import {useLazySearchQuery} from "./store/search/search.api";
import Card from "./components/card/Card";

function App() {
  const [fetchSearch, {data: resultSearch, error, isFetching, isLoading}] = useLazySearchQuery();

  return (
    <div className="App">
        <Background />
        <div className="flex justify-start items-center gap-2 flex-col pt-5 h-screen w-full">
            <Form fetchFn={fetchSearch} processFetching={isFetching}/>
            {resultSearch &&
                resultSearch.map(item => (
                    <Card user={item} key={item.number}/>
                ))
            }

            {!isLoading && resultSearch?.length === 0 &&
                <h1>По данному запросу ничего не найдено!</h1>
            }
            {error &&
                <h1>Ошибка запроса!</h1>
            }
        </div>
    </div>
  );
}

export default App;
