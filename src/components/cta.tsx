import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <section className="py-12 items-center justify-center">
      <div className="container flex items-center justify-center">
        <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
          <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            Elevate Your Brand with Apollo Studios
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            We craft high-performance websites that blend innovation, design, and cutting-edge technology. Let’s build something incredible together.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
