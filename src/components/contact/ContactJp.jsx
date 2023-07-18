import React from "react";
import { useForm } from "react-hook-form";

const ContactJp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder="お名前わ"
                {...register("name", { required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">名前は必須</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control theme-light"
                placeholder="メールアドレス"
                {...register(
                  "email",
                  {
                    required: "Eメール必須",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder="テーマ"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="invalid-feedback">対象は必須。</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <textarea
                rows="4"
                className="form-control theme-light"
                placeholder="タイプコメント"
                {...register("comment", { required: true })}
              ></textarea>
              {errors.comment && (
                <span className="invalid-feedback">コメントが必要である。</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="btn-bar">
              <button className="px-btn px-btn-white">メッセージを送る</button>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </>
  );
};

export default ContactJp;
