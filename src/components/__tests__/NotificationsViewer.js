import NotificationsViewer from "../NotificationsViewer";
import renderer from "react-test-renderer";
import React from "react";
import delay from "redux-saga";

/*
 * NotificationsService is using as a mock
 * for local module
 */
jest.mock("../../services/NotificationsService");

const notificationsService = require("../../services/NotificationsService")
    .default;

describe("The stateful notifications viewer", async () => {
    beforeAll(() => {
        notificationsService.__setCount(75);
    });

    it("Should display the correct number of notifications", async () => {
        const tree = renderer.create( < NotificationsViewer / >
    )
        ;

        await delay();
        const instance = tree.root;
        const component = instance.findByProps({className: `notifications`});
        const text = component.children[0];
        expect(text).toEqual("75 Notifications");
    });
});
