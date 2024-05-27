/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

type valueType = string | undefined;

interface valueContextProps {
	value: valueType;
  setValue:React.Dispatch<React.SetStateAction<valueType>>
}

const valueContext = createContext<valueContextProps | undefined>(undefined);

export const ValueProvider = ({ children }: { children: React.ReactNode }) => {
	const [value, setValue] = useState<valueType>(undefined);
	return (
		<valueContext.Provider value={{ value, setValue }}>{children}</valueContext.Provider>
	);
};

const useValue = (): valueContextProps => {
	const context = useContext(valueContext);
	if (!context) {
		throw new Error('useValue must be used within a valueContextProvider ');
	}

	return context;
};

export { useValue };
