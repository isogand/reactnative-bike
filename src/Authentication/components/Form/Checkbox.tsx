import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather as Icon } from '@expo/vector-icons';
import {Box,Text} from "../../../components";


interface CheckboxProps  {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {

    return (
        <BorderlessButton onPress={() => onChange()} style={{ justifyContent: 'center' }}>
            {/*onPress={() => setChecked((c) => !c)}*/}
            <Box flexDirection="row">
                <Box
                    height={20}
                    width={20}
                    marginRight="s"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="s"
                    borderWidth={1}
                    borderColor="primary"
                    backgroundColor={checked ? "primary" : "background"}
                >
                    <Icon name="check" color="black"/>
                </Box>
                <Text style={{color:'#575757'}} variant="button">{label}</Text>
            </Box>
        </BorderlessButton>
    );
};

export default Checkbox;
