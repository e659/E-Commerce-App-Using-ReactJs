import React from "react";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { BiCategory } from "react-icons/bi";
import { ImPriceTags } from "react-icons/im";
import "../Filters/styles/filter.scss";
export default function filters() {
  return (
    <>
      <ProSidebar>
        <SidebarHeader>
          <form className="d-flex pt-2" role="search">
            <input
              className="form-control  filterSearch"
              type="search"
              placeholder="Search by name"
              aria-label="Search"
            />
          </form>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square" style={{ fontWeight: "Bold" }}>
            <SubMenu
              title="Categories"
              
              defaultOpen={true}
              icon={<BiCategory />}
              className="fs-4"
            >
              <form action="">
                <MenuItem>
                  <div className="form-check">
                    <input
                      className="form-check-input categoryInput"
                      type="checkbox"
                      value="clothes"
                      id="flexCheckChecked1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked1"
                    >
                      Clothes
                    </label>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="form-check">
                    <input
                      className="form-check-input categoryInput"
                      type="checkbox"
                      value="Electronics"
                      id="flexCheckChecked1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked1"
                    >
                      Electronics
                    </label>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="form-check">
                    <input
                      className="form-check-input categoryInput"
                      type="checkbox"
                      value="    Jewellery"
                      id="flexCheckChecked1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked1"
                    >
                      Jewellery
                    </label>
                  </div>
                </MenuItem>
                <button className="btn filterBtn catBtn px-5 mt-3 ">
                  <span>Filter</span>
                </button>
              </form>
            </SubMenu>
          </Menu>

          <Menu iconShape="square">
            <SubMenu
              title="Price"
            
              icon={<ImPriceTags />}
              style={{ fontWeight: "Bold" }}
              className="fs-4"
            >
              <MenuItem>
                <form className="filter-form">
                  <div className="row">
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        min="10"
                        max="10000"
                        placeholder="Min"
                        aria-label="First name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        min="10"
                        max="10000"
                        placeholder="Max"
                        aria-label="First name"
                      />
                    </div>
                  </div>

                  <button
                    className="btn filterBtn px-5 mt-3 "
                    style={{ paddingRight: "4.5rem" }}
                  >
                    <span>Set Price</span>
                  </button>
                </form>
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </>
  );
}
