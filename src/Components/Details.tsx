import { RootStackParamList } from "@/Types/Stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

const Details = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "Details">) => {
  const {
    params: { task },
  } = route;

  return (
    <View>
      <Text>Detalhes</Text>
      <Text>Nome</Text>
      <Text>{task.name}</Text>

      <Text>Data de criação</Text>
      <Text>{task.createdAt.toISOString()}</Text>

      <Text>Finalizada</Text>
      <Text>{task.isFinished ? "Finalizada" : "Pendente"}</Text>
    </View>
  );
};

export default Details;
