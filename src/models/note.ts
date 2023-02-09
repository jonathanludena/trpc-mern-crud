import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class Note {
  @prop({type: String})
  title: string;

  @prop({type: String})
  desxcription: string;

  @prop({type: Boolean})
  done?: string;
}

export default getModelForClass(Note);
