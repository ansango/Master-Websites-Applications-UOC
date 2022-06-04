import { Issue } from "@/models/issue";
import { onPostIssueService } from "@/services/issue";
import { Form, Input, TextArea } from "components/common/Forms";
import Modal from "components/common/Modal/Modal";
import ModalAction from "components/common/Modal/ModalAction";
import ModalBox from "components/common/Modal/ModalBox";
import ModalContent from "components/common/Modal/ModalContent";
import ModalTitle from "components/common/Modal/ModalTitle";
import { closeModal } from "components/common/Modal/utils";
import React, { FC, useCallback, useState } from "react";

const ModalIssue: FC<{ id: string }> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = useCallback(
    async ({ title, description, email }: any) => {
      setIsLoading(true);
      const issue: Issue = {
        title,
        description,
        email,
      };
      try {
        await onPostIssueService(issue);
        setIsLoading(false);
        closeModal(id);
      } catch (error) {
        setIsLoading(false);
        closeModal(id);
      }
    },
    [id]
  );
  const cn = isLoading
    ? "btn btn-primary normal-case loading"
    : "btn btn-primary normal-case";
  return (
    <Modal id={id}>
      <ModalBox id={id}>
        <Form onSubmit={onSubmit}>
          <ModalTitle label="¿Has encontrado algún error?" />

          <ModalContent>
            <div className="space-y-5">
              <p>
                Actualmente <span className="font-semibold">Robocooker</span> se
                encuentra en desarrollo, por lo que si encuentras algún error o
                quieres ayudar a mejorar, rellena este formulario.
              </p>
              <Input
                name="title"
                type="text"
                placeholder="Título del error"
                options={{
                  required: {
                    value: true,
                    message: "Introduce un título",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9 ]*$/,
                    message: "Solo se permiten letras y números",
                  },
                  min: {
                    value: 8,
                    message: "El título debe tener al menos 8 caracteres",
                  },
                  max: {
                    value: 30,
                    message: "El título debe tener como máximo 30 caracteres",
                  },
                }}
              />
              <TextArea
                name="description"
                size="sm"
                placeholder="Descripción del error"
                options={{
                  required: {
                    value: true,
                    message: "Describe el error",
                  },
                  min: {
                    value: 10,
                    message: "Escribe al menos 10 caracteres",
                  },
                }}
              />
              <Input
                name="email"
                type="text"
                placeholder="Tu email"
                options={{
                  required: {
                    value: true,
                    message: "Introduce un email",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Introduce un email valido",
                  },
                }}
              />
            </div>
          </ModalContent>
          <ModalAction>
            <button className={cn} type="submit">
              Enviar
            </button>
          </ModalAction>
        </Form>
      </ModalBox>
    </Modal>
  );
};

export default ModalIssue;
