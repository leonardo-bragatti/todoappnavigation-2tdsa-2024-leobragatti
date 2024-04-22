import { Task } from "@/Types";
import { useState } from "react";
import { View, TextInput, Button, FlatList } from "react-native";
import TaskItem from "./TaskItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Types/Stack";

const Tasks = ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const add = () => {
    setName("");
    setTasks([{ name, createdAt: new Date(), isFinished: false }, ...tasks]);
  };

  return (
    <View>
      <TextInput value={name} onChangeText={setName} />
      <Button title="+" onPress={add} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem task={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Tasks;
