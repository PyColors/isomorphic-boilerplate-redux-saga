import NotificationsViewer from "../NotificationsViewer";
import renderer from "react-test-renderer";
import React from "react";
import delay from "redux-saga";

describe("The notification viewer", () => {
    it("Should display the correct number of notifications", async () => {
        const tree = renderer.create(<NotificationsViewer />);

        await delay();
        const instance = tree.root;
        const component = instance.findByProps({ className: `notifications` });
        const text = component.children[0];
        expect(text).toEqual("5 Notifications");
    });
});
